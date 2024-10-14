import envConfig from "@/app/config";
import { getSession } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { routeApi: string[] } }
) {
  const routeApi = params.routeApi // 'a', 'b', or 'c'
  const routeApiString = routeApi.reduce((route, currentValue) => `${route}`.concat(`/${currentValue}`), '')
  console.log('Route api', routeApi, routeApiString)
  const allCookies = cookies().getAll()
  const session = await getSession();
  console.log('Session token', session, allCookies)
  const response = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${routeApiString}`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    }
  ).then((res) => res.json());
  return Response.json(response)
}