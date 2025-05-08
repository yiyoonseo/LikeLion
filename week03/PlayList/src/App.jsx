import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalContext from "./components/layouts/ModalContext";

import { Playlist } from "./pages/Playlist";
import { Top100 } from "./pages/Top100";
import { MyPage } from "./pages/MyPage";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/layouts/Layout";
import ModalData from "./components/ModalData";
import albumData from "./data/song.json";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(String(id));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const selectedData = albumData.find(
    (song) => String(song.id) === String(selectedId)
  );

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  console.log("selectedId:", selectedId);
  console.log(
    "albumData ids:",
    albumData.map((s) => s.id)
  );
  console.log("selectedData:", selectedData);
  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, selectedId }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Playlist />} />
            <Route path="/top100" element={<Top100 />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        {isModalOpen && (
          <ModalData
            albumImage={selectedData.albumImage}
            closeModal={closeModal}
          />
        )}
      </BrowserRouter>
    </ModalContext.Provider>
  );
}

export default App;
