import axios from "axios";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TVdetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(res.data);
      } catch (error) {
        console.error("상세 조회 실패: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShow();
  }, [id]);

  if (loading) return <p>loading . . .</p>;
  if (!show) return <p>상세 정보 없음</p>;

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10 flex flex-col md:flex-row items-start gap-10">
      {/* 이미지 */}
      {show.image && (
        <img
          src={show.image.original}
          alt={show.name}
          className="w-full md:w-96 rounded-lg shadow-lg"
        />
      )}

      {/* 정보 */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{show.name}</h1>
        <div
          className="text-gray-300 leading-relaxed text-sm md:text-base mb-6"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />

        <div className="space-y-2 text-sm md:text-base">
          <p>
            <span className="font-semibold text-white">언어:</span>{" "}
            {show.language}
          </p>
          <p>
            <span className="font-semibold text-white">장르:</span>{" "}
            {show.genres.join(", ")}
          </p>
          <p>
            <span className="font-semibold text-white">상영 상태:</span>{" "}
            {show.status}
          </p>
          {show.premiered && (
            <p>
              <span className="font-semibold text-white">첫 방영일:</span>{" "}
              {show.premiered}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVdetail;
