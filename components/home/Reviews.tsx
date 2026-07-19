"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("reviews");

  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState<
    {
      name: string;
      comment: string;
      rating: number;
    }[]
  >([]);

  const submitReview = () => {
    if (!name.trim()) return;

    setReviews([
      {
        name,
        comment,
        rating,
      },
      ...reviews,
    ]);

    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            {t("title")}
          </h2>

          <p className="mt-4 text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 rounded-3xl border p-8 shadow-lg">

          <div className="flex gap-2 justify-center mb-8">
            {[1,2,3,4,5].map((value)=>(
              <button
                key={value}
                onClick={()=>setRating(value)}
              >
                <Star
                  size={34}
                  fill={value<=rating ? "#D4A017":"transparent"}
                  color="#D4A017"
                />
              </button>
            ))}
          </div>

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder={t("name")}
            className="w-full border rounded-2xl p-4 mb-5"
          />

          <textarea
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            placeholder={t("comment")}
            rows={5}
            className="w-full border rounded-2xl p-4 resize-none"
          />

          <button
            onClick={submitReview}
            className="mt-6 w-full rounded-2xl bg-[#D4A017] py-4 text-white font-bold hover:bg-[#b98b12]"
          >
            {t("button")}
          </button>

        </div>

        <div className="mt-14 space-y-6">

          {reviews.map((review,index)=>(

            <div
              key={index}
              className="rounded-3xl border p-6 shadow-sm"
            >

              <div className="flex gap-1 mb-3">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={20}
                    fill={star<=review.rating ? "#D4A017":"transparent"}
                    color="#D4A017"
                  />
                ))}

              </div>

              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              {review.comment && (
                <p className="mt-2 text-gray-600">
                  {review.comment}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}