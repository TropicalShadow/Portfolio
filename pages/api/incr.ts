import { NextRequest, NextResponse } from "next/server";

export const config = {
	runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {

	return new NextResponse(null, { status: 202 });
}
