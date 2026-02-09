"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@mui/material/Typography";

interface Props {
  image: string;
  title: string;
  text: string;
  author: string;
}

export default function TestimonialCard({
  image,
  title,
  text,
  author,
}: Props) {
  return (
    <Card className="max-w-5xl mx-auto border-green-200 shadow-xl bg-linear-to-br from-green-50 to-white">
      <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        <Image
          src={image}
          alt={author}
          width={180}
          height={180}
          className="rounded-full border-4 border-amber-400 shadow-xl"
        />

        <div>
          <Typography
            variant="h5"
            className="text-green-800 font-bold mb-3"
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            className="italic text-gray-700 mb-3"
          >
            “{text}”
          </Typography>

          <Typography
            variant="subtitle2"
            className="font-semibold text-gray-800"
          >
            — {author}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
