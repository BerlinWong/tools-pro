import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const xhs_url = req.nextUrl.searchParams.get("xhs_url");
  if (!xhs_url) {
    return NextResponse.json({ message: "请提供有效的 URL" }, { status: 400 });
  }

  try {
    const response = await axios.get(xhs_url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        Referer: "https://www.xiaohongshu.com",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Connection": "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });

    const $ = cheerio.load(response.data);
    const scriptTag = $("script")
      .filter(function (i, el) {
        return $(el).html()?.includes("window.__INITIAL_STATE__") ?? false;
      })
      .html();

    if (!scriptTag) {
      console.log(response.data);
      return NextResponse.json(
        { message: response.data },
        { status: 404 }
      );
    }
    console.log(response.data);

    const jsonStr = scriptTag.split("window.__INITIAL_STATE__=")[1];
    try {
      JSON.parse(jsonStr);
      return NextResponse.json(
        { message: "JSON字符串是合法的", data: jsonStr },
        { status: 200 }
      );
    } catch {
      const pythonDictStr = jsonStr
        .replace(/'/g, '"')
        .replace(/undefined/g, '""');
      try {
        const parsedData = JSON.parse(pythonDictStr);
        return NextResponse.json(
          { message: "2JSON字符串是合法的", data: parsedData },
          { status: 200 }
        );
      } catch (innerError) {
        return NextResponse.json(
          {
            message: "3JSON字符串不是合法的",
            error: (innerError as Error).message,
          },
          { status: 400 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: "请求失败", error: (error as Error).message },
      { status: 500 }
    );
  }
}
