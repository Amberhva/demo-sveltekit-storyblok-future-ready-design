// Hieronder worden er vier componenten geïmporteerd van het mapje 'componenten'
import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";

// Hier worden drie functies (apiPlugin, storyblokInit, en useStoryblokApi) geïmporteerd uit het @storyblok/svelte pakket. 
// Deze functies worden gebruikt voor de integratie van Storyblok, met het SvelteKit-project.
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

// Dit is een JSDoc-opmerking die het type van de load-functie definieert. 
// Het geeft aan dat 'load' een functie is die het laadgedrag van een layout beschrijft en het type van dit gedrag wordt gespecificeerd in het bestand ./$types
/** @type {import('./$types').LayoutLoad} */

// Deze functie wordt aangeroepen om gegevens op te halen die nodig zijn voor het renderen van de pagina
export async function load() {
    //Deze functie initialiseert Storyblok met de opgegeven opties, zoals de accesToken, de te gebruiken plugins, de gedefinieerde componenten, en de opties voor de API.
    storyblokInit({
        accessToken: "25veRogTSeV7Rr3W7vxKKgtt",
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser,
        },
        apiOptions: {
            region: "eu",
        },
    });

    // Dit zorgt ervoor dat je de Stroyblok API kunt gebruiken om informatie van Storyblok te krijgen
    let storyblokApi = await useStoryblokApi();

    // Zorgt ervoor dat de Storyblok API gereturnt wordt vanuit de 'load'-functie, 
    //waardoor de gegevens van Storyblok opgehaald en gebruikt kan worden in de Sveltekit layout
    return {
        storyblokApi: storyblokApi,
    };
}