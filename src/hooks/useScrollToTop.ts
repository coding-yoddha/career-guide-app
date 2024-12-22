import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to the top when the route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Trigger the function when the route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
};

export default useScrollToTop;
