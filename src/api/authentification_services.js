export let res;

export async function login(email, password) {
  try {
    res = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  } catch (e) {
    console.error(e);
  }
}
