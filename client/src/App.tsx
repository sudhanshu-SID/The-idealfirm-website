import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import GoogleAdsPage from "@/pages/services/GoogleAds";
import FacebookAdsPage from "@/pages/services/FacebookAds";
import WebDesignPage from "@/pages/services/WebDesign";
import SEOPage from "@/pages/services/SEO";
import SocialMediaPage from "@/pages/services/SocialMedia";
import ContentMarketingPage from "@/pages/services/ContentMarketing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/services/google-ads-guwahati" component={GoogleAdsPage} />
      <Route path="/services/facebook-ads-guwahati" component={FacebookAdsPage} />
      <Route path="/services/web-designing-guwahati" component={WebDesignPage} />
      <Route path="/services/seo-guwahati" component={SEOPage} />
      <Route path="/services/social-media-marketing-guwahati" component={SocialMediaPage} />
      <Route path="/services/content-marketing-guwahati" component={ContentMarketingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
