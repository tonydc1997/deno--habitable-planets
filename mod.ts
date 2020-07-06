import { join } from "https://deno.land/std/path/mod.ts";

async function loadPlanetsData() {
  const path = join(".", "kepler_exoplanets_nasa.csv");
  const data = await Deno.open(path);

  console.log(data);
}

await loadPlanetsData();
