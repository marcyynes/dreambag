import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


import { Tagline } from "~/components/pro-blocks/landing-page/tagline";
import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 md:gap-16 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            <div className="section-title-gap-lg flex flex-col items-start">
              <Tagline>Feature section</Tagline>
              <h2 className="heading-lg text-foreground">
                D for the Dream Bag
              </h2>
              <p className="text-muted-foreground">
              D stands for Dior, my Dream Bag. They say, “Dream big, for you never know what life will bring you.” For me, it is more than just a brand or a bag. It is a symbol of hard work, perseverance, and self-belief.It reminds me to study and work hard to achieve the life I dream of. “Success starts with a dream and becomes real through effort.” One day, this dream bag will be more than a wish. It will be a reward for dedication and determination.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button>Get access</Button>
              <Button variant="ghost">
                Learn more
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="w-full flex-1">
            <AspectRatio ratio={4 / 3}>
              <Image
              src="/bag.jpg"
              alt="Feature section image"
              fill
              className="rounded-xl object-cover"
/>

            </AspectRatio>
          </div>
        </div>
      </section>
    );
  }
  
