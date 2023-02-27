import { useState } from "react";

function ShareLinkedinButton() {
  const text = `Taland olarak AIBC World Eurasia'dayız!\n
@GelecektekiSen Teknoloji Laboratuarı’ndan çıkan Web 3.0 girişimimiz Taland, sektörünün en prestijli Blokchain Start Up Summit’lerinden AIBC World Eurasia sahnesinde pitching yapacak 6 girişimden biri olarak seçildi. 🎉
\nBeğenilerinize ve tweetlerinize ihtiyacımız var!\n
#startup #teknoloji #blokzincir #blockchain #tech #aibcsummit #aibc #taland
    `;

  const shareContent = {
    title: `Beğenilerinize ve gönderilerinize ihtiyacımız var!`,
    summary: `
    GelecektekiSen Teknoloji Laboratuarı’ndan çıkan Web 3.0 girişimimiz Taland, sektörünün en prestijli Blokchain Start Up Summit’lerinden AIBC World Eurasia sahnesinde pitching yapacak 6 girişimden biri olarak seçildi. 🎉

    Beğenilerinize ve gönderilerimize ihtiyacımız var! Linki kullanarak tweet ve Lınkedin Gönderisi atabilirsiniz.`,
    url: "https://taland.vercel.app/",
  };

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      window.alert("İçerik panoya kopyalandı (kısayol: ctrl+v ile) yapıştırıp paylaşabilirsiniz");
      redirectCallBack();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const redirectCallBack = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareContent.url
    )}&title=${encodeURIComponent(
      shareContent.title
    )}&summary=${encodeURIComponent(shareContent.summary)}`;
    window.open(url);
  };

  const handleShareClick = () => {
    copyContent();
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={handleShareClick}
        data-te-ripple-init
        data-te-ripple-color="light"
        className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        style={{ backgroundColor: "#0077b5" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        PAYLAŞ
      </button>
    </div>
  );
}

export default ShareLinkedinButton;
