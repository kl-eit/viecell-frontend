export async function GET() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return new Response(JSON.stringify({ country: data.country_name }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ country: "India" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
}