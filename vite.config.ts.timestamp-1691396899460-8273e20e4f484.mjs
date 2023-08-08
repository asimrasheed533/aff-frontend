// vite.config.ts
import HotExport from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-hot-export/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-pwa/dist/index.js";
import { ViteWebfontDownload } from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { chunkSplitPlugin } from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-chunk-split/dist/index.js";

// remix.config.js
var config = {
  compression: true,
  fontOptimization: true,
  progressiveWebApp: false,
  imagesOptimization: false,
  alias: {
    // "@somealias": "/src/somepath",
  }
};

// vite.config.ts
import { defineConfig } from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///C:/Users/Abrar%20Khalid/Documents/GitHub/AdvanceAffFinal/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@router": "/router",
      "@layouts": "/src/layouts",
      ...config.alias
    }
  },
  plugins: [
    HotExport(),
    config.compression && chunkSplitPlugin(),
    config.fontOptimization && ViteWebfontDownload(),
    config.compression && viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    config.progressiveWebApp && VitePWA({ registerType: "autoUpdate" }),
    config.imagesOptimization && viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 30 },
      pngquant: { quality: [0.7, 0.8], speed: 4 },
      webp: { quality: 70 },
      svgo: {
        multipass: true,
        plugins: [
          { name: "removeViewBox" },
          { name: "minifyStyles" },
          { name: "removeMetadata" },
          { name: "removeUselessStrokeAndFill" },
          { name: "reusePaths" },
          { name: "removeEmptyAttrs", active: true }
        ]
      }
    }),
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicmVtaXguY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWJyYXIgS2hhbGlkXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcQWR2YW5jZUFmZkZpbmFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBYnJhciBLaGFsaWRcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBZHZhbmNlQWZmRmluYWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FicmFyJTIwS2hhbGlkL0RvY3VtZW50cy9HaXRIdWIvQWR2YW5jZUFmZkZpbmFsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IEhvdEV4cG9ydCBmcm9tIFwidml0ZS1wbHVnaW4taG90LWV4cG9ydFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5pbXBvcnQgeyBWaXRlV2ViZm9udERvd25sb2FkIH0gZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcclxuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jaHVuay1zcGxpdFwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9yZW1peC5jb25maWdcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZW1pblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBjb21wb25lbnRzXCI6IFwiL3NyYy9jb21wb25lbnRzXCIsXHJcbiAgICAgIFwiQGFzc2V0c1wiOiBcIi9zcmMvYXNzZXRzXCIsXHJcbiAgICAgIFwiQHJvdXRlclwiOiBcIi9yb3V0ZXJcIixcclxuICAgICAgXCJAbGF5b3V0c1wiOiBcIi9zcmMvbGF5b3V0c1wiLFxyXG4gICAgICAuLi5jb25maWcuYWxpYXMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgSG90RXhwb3J0KCksXHJcbiAgICBjb25maWcuY29tcHJlc3Npb24gJiYgY2h1bmtTcGxpdFBsdWdpbigpLFxyXG4gICAgY29uZmlnLmZvbnRPcHRpbWl6YXRpb24gJiYgVml0ZVdlYmZvbnREb3dubG9hZCgpLFxyXG4gICAgY29uZmlnLmNvbXByZXNzaW9uICYmXHJcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgICAgYWxnb3JpdGhtOiBcImJyb3RsaUNvbXByZXNzXCIsXHJcbiAgICAgICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgICAgIH0pLFxyXG4gICAgY29uZmlnLnByb2dyZXNzaXZlV2ViQXBwICYmIFZpdGVQV0EoeyByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiIH0pLFxyXG4gICAgY29uZmlnLmltYWdlc09wdGltaXphdGlvbiAmJlxyXG4gICAgICB2aXRlSW1hZ2VtaW4oe1xyXG4gICAgICAgIGdpZnNpY2xlOiB7IG9wdGltaXphdGlvbkxldmVsOiA3LCBpbnRlcmxhY2VkOiBmYWxzZSB9LFxyXG4gICAgICAgIG9wdGlwbmc6IHsgb3B0aW1pemF0aW9uTGV2ZWw6IDcgfSxcclxuICAgICAgICBtb3pqcGVnOiB7IHF1YWxpdHk6IDMwIH0sXHJcbiAgICAgICAgcG5ncXVhbnQ6IHsgcXVhbGl0eTogWzAuNywgMC44XSwgc3BlZWQ6IDQgfSxcclxuICAgICAgICB3ZWJwOiB7IHF1YWxpdHk6IDcwIH0sXHJcbiAgICAgICAgc3Znbzoge1xyXG4gICAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxyXG4gICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVtb3ZlVmlld0JveFwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJtaW5pZnlTdHlsZXNcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVtb3ZlTWV0YWRhdGFcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVtb3ZlVXNlbGVzc1N0cm9rZUFuZEZpbGxcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmV1c2VQYXRoc1wiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJyZW1vdmVFbXB0eUF0dHJzXCIsIGFjdGl2ZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIHJlYWN0KCksXHJcbiAgXSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWJyYXIgS2hhbGlkXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcQWR2YW5jZUFmZkZpbmFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBYnJhciBLaGFsaWRcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxBZHZhbmNlQWZmRmluYWxcXFxccmVtaXguY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BYnJhciUyMEtoYWxpZC9Eb2N1bWVudHMvR2l0SHViL0FkdmFuY2VBZmZGaW5hbC9yZW1peC5jb25maWcuanNcIjtleHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGNvbXByZXNzaW9uOiB0cnVlLFxyXG4gIGZvbnRPcHRpbWl6YXRpb246IHRydWUsXHJcbiAgcHJvZ3Jlc3NpdmVXZWJBcHA6IGZhbHNlLFxyXG4gIGltYWdlc09wdGltaXphdGlvbjogZmFsc2UsXHJcbiAgYWxpYXM6IHtcclxuICAgIC8vIFwiQHNvbWVhbGlhc1wiOiBcIi9zcmMvc29tZXBhdGhcIixcclxuICB9LFxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLE9BQU8sZUFBZTtBQUN4WCxTQUFTLGVBQWU7QUFDeEIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyx3QkFBd0I7OztBQ0gwVSxJQUFNLFNBQVM7QUFBQSxFQUN4WCxhQUFhO0FBQUEsRUFDYixrQkFBa0I7QUFBQSxFQUNsQixtQkFBbUI7QUFBQSxFQUNuQixvQkFBb0I7QUFBQSxFQUNwQixPQUFPO0FBQUE7QUFBQSxFQUVQO0FBQ0Y7OztBREhBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsTUFDZixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixHQUFHLE9BQU87QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTyxlQUFlLGlCQUFpQjtBQUFBLElBQ3ZDLE9BQU8sb0JBQW9CLG9CQUFvQjtBQUFBLElBQy9DLE9BQU8sZUFDTCxnQkFBZ0I7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNILE9BQU8scUJBQXFCLFFBQVEsRUFBRSxjQUFjLGFBQWEsQ0FBQztBQUFBLElBQ2xFLE9BQU8sc0JBQ0wsYUFBYTtBQUFBLE1BQ1gsVUFBVSxFQUFFLG1CQUFtQixHQUFHLFlBQVksTUFBTTtBQUFBLE1BQ3BELFNBQVMsRUFBRSxtQkFBbUIsRUFBRTtBQUFBLE1BQ2hDLFNBQVMsRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUN2QixVQUFVLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLE9BQU8sRUFBRTtBQUFBLE1BQzFDLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNwQixNQUFNO0FBQUEsUUFDSixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUCxFQUFFLE1BQU0sZ0JBQWdCO0FBQUEsVUFDeEIsRUFBRSxNQUFNLGVBQWU7QUFBQSxVQUN2QixFQUFFLE1BQU0saUJBQWlCO0FBQUEsVUFDekIsRUFBRSxNQUFNLDZCQUE2QjtBQUFBLFVBQ3JDLEVBQUUsTUFBTSxhQUFhO0FBQUEsVUFDckIsRUFBRSxNQUFNLG9CQUFvQixRQUFRLEtBQUs7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNILE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
