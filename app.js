import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 0;
let answer = 0;

app.get("/", (c) => {
  count++;
  if (count === 1)
  {
    answer = '3,'; 
  }
  else if (count === 2)
  {
      answer = '2,';
  }
  else if (count === 3)
  {
      answer = '1,';
  }
  else
  {
      answer = 'Kaboom!';
  }
  return c.text(answer);
});
export default app;
