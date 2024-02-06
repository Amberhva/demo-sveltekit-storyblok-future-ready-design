import Feature from "../components/feature.svelte";
import Grid from "../components/grid.svelte";
import Page from "../components/page.svelte";
import Teaser from "../components/teaser.svelte";

import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    storyblokInit({
        accessToken: "25veRogTSeV7Rr3W7vxKKgtt",
        use: [apiPlugin],
        apiOptions: {
            https: true,
            region: "eu",
        },
    });
    let storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi,
    };
}
