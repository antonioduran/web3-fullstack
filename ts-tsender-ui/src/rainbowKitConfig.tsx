"use client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync } from "wagmi/chains";

export default getDefaultConfig({
    appName: "TSender",
    chains: [anvil, zksync],
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    ssr: false
})