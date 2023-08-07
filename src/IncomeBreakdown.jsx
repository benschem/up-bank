export function IncomeBreakdown() {
  const baseUrl = "https://api.up.com.au/api/v1";
  const endPoint = "/";
  const accessToken = "";

  const categories = []

  fetch(baseUrl + endPoint, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`
    },
    body: "page[size]=1"
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  })

  return (
    categories.forEach(category => {
      <div class="min-h-[{category.percentage}vh] bg-purple-950/{category.percentage}">
        <h3>{category.name}</h3>
        <p>{category.amount}</p>
      </div>
    })
  );
}
