import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

async function loadPlanetsData() {
  const path = join(".", "kepler_exoplanets_nasa.csv");
  const file = await Deno.open(path);

  console.log(data);
}

await loadPlanetsData();
