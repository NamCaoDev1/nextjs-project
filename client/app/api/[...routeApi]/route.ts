import envConfig from "@/app/config";
import { getSession } from "@/lib/normal-auth";

export async function GET(
  request: Request,
  { params }: { params: { routeApi: string[] } }
) {
  const routeApi = params.routeApi; // 'a', 'b', or 'c'
  const routeApiString = routeApi.reduce(
    (route, currentValue) => `${route}`.concat(`/${currentValue}`),
    ""
  );
  const session = await getSession();
  const response = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${routeApiString}`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    }
  ).then((res) => res.json());
  return Response.json(response);
}
