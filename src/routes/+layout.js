import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
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
    let storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi,
    };
}