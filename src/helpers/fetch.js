export async function fetcher(param) {
  let url = param.queryKey[0];
  const response = await fetch(url);
  return response.json();
}