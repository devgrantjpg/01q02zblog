import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware() {}, {
   publicPaths: ["/", "/ecom", "/books", "/electronics", "/circe", "/thelordoftherings", "/dragonflight" ,"/abundance" ,"/thebookofdoors" ,"/booklovers" ,"/funnystory" ,"/lovestory" ,"/atmosphere" ,"/goodomens" ,"/aworldalone" ,"/theoutsiders" ,"/themummystomb", "/thehauntedcar", "/ghostlyadventures"],
  });

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}