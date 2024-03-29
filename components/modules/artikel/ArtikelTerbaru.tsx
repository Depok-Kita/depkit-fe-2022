import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Card, ShareLinkToClipboard } from "@components";
import Link from "next/link";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import ReactMarkdown from "react-markdown";
const removeMd = require("remove-markdown");

type ArtikelTerbaruProps = {
  className?: string;
  articles?: any;
  children?: React.ReactNode;
};

export const ArtikelTerbaru = ({
  children,
  className,
  articles,
}: ArtikelTerbaruProps) => {
  const { width } = useWindowSize();
  // Sorting artikel berdasarkan tanggal terbaru
  articles.sort((a: any, b: any) =>
    a.date < b.date ? 1 : a.date === b.date ? (a.id < b.id ? 1 : -1) : -1
  );

  // Mengambil data jumlah artikel yang ada (jika dibawah 3 maka ambil sesuai jumlah artikel yang ada)
  const jumlahArtikel = articles.length;
  let jumlahFilterArtikelTerbaru = 3;
  if (jumlahArtikel < 3) {
    jumlahFilterArtikelTerbaru = jumlahArtikel;
  }

  // Mengambil 3 artikel terbaru
  const artikelTerbaru = articles.slice(0, jumlahFilterArtikelTerbaru);

  // Menambahkan angka pada setiap artikel
  for (let i = 1; i <= jumlahFilterArtikelTerbaru; i++) {
    artikelTerbaru[i - 1].nomor = i;
  }

  // Melakukan format tanggal
  const dateFormat = (date: any) => {
    return date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  };

  // SOLUSI 1 : Rumit
  // Method untuk reverse string
  // function reverseString(str: string) {
  //   let result = "";
  //   let i = str.length - 1;

  //   while (i >= 0) {
  //     result += str[i];
  //     i--;
  //   }
  //   return result;
  // }
  // Markdown checker (untuk satu character yang tidak ada pasangannya)
  // Kalau tidak ada maka gunakan "none"
  // Iterasi karakter yang sudah dibalik (dapatkan code check markdown terakhir)
  // let lastMarkdown = "";
  // const checkLastMarkdown = (body: string) => {
  //   for (let ch of reverseString(body)) {
  //     if (ch === "_" || ch === "*" || ch === "<u>" || ch === "</u>") {
  //       // masalahnya char ini juga cuma mengambil satu char aja
  //       lastMarkdown = ch;
  //       break;
  //     }
  //   }
  //   lastMarkdown = "none";
  // };
  // // Mendapatkan karakter markdown kedua dari belakang
  // let secondLastMarkdown = "";
  // const checkSecondLastMarkdown = (body: string) => {
  //   for (let ch of reverseString(body)) {
  //     if (ch === "_" || ch === "*" || ch === "<u>" || ch === "</u>") {
  //       secondLastMarkdown = ch;
  //       break;
  //     }
  //   }
  //   secondLastMarkdown = "none";
  // };
  // const lastSingleMarkdown = new Array();
  // for (let article of articles) {
  // }

  // SOLUSI 2 : Remove Markdown Char
  // https://npm.io/package/remove-markdown
  // https://www.npmjs.com/package/remove-markdown
  const articlesClear = artikelTerbaru.map((article: any) => {
    return {
      ...article,
      title: removeMd(article.title),
      body: removeMd(article.body),
    };
  });

  // Membersihkan teks dari format dan nama suatu format seperti .jpg dst
  const removedFileFormat = [".jpg", ".png", ".jpeg"];
  const removeFormatFile = (body: string) => {
    // Menyusun body baru
    let bodyBaru = "";
    for (let kata of body.split(" ")) {
      let adaFormat = false;
      for (let formt of removedFileFormat) {
        if (kata.includes(formt)) {
          adaFormat = true;
          break;
        }
      }
      // Kalau ditemukan format dalam kata tersebut maka dicontinue
      if (adaFormat) {
        continue;
      } else {
        // Kalau gaada ditambahkan ke bodyBaru
        bodyBaru += kata + " ";
      }
    }
    return bodyBaru;
  };

  const articlesFormatClear = articlesClear.map((article: any) => {
    return {
      ...article,
      body: removeFormatFile(article.body),
    };
  });

  return (
    <div className="flex justify-center bg-powder mobile:py-4 tablet:py-14">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center mobile:px-7 tablet:pl-16 tablet:pb-5 desktop:pl-28 desktop:pb-8">
          <Body
            preset="b2"
            className="border-l-2 border-cerulean px-2 tablet:border-l-4 tablet:text-[24px] tablet:px-4 desktop:text-[32px]"
          >
            Artikel Terbaru
          </Body>
        </div>
        <div className="flex flex-col">
          {articlesFormatClear.map((article: any) => (
            <div
              className="flex justify-center py-1 tablet:py-[6px] desktop:py-[10px]"
              key={article.id}
            >
              <Card
                preset="light"
                className="mobile:w-[315px] p-4 rounded-xl relative tablet:w-[640px] tablet:h-[160px] tablet:rounded-2xl desktop:w-[1050px] desktop:h-[250px] desktop:rounded-3xl"
                padding="false"
              >
                <Link href={"/artikel/" + article.slug}>
                  {/* BUTTON UNTUK MENGARAHKAN ALAMAT KE BODY ARTIKEL */}
                  <button>
                    <div className="flex gap-2">
                      <Header
                        preset={
                          width >= 1280 ? "h1" : width >= 768 ? "h2" : "h4"
                        }
                        className="text-powder tablet:pr-2 desktop:text-[90px]"
                      >
                        {article?.nomor}
                      </Header>
                      <Image
                        src={article?.photoUrl}
                        alt={article?.photoAlt}
                        width={width >= 1280 ? 240 : width >= 768 ? 165 : 85}
                        height={width >= 1280 ? 170 : width >= 768 ? 100 : 60}
                        className="rounded-md tablet:rounded-xl desktop:rounded-2xl"
                        objectFit="cover"
                      />
                      <div className="text-left mobile:max-w-[150px] tablet:max-w-[380px] tablet:pl-2 desktop:max-w-[680px]">
                        <Body
                          preset="p3"
                          className="mobile:text-[9px] tablet:text-[11px] desktop:text-[14px]"
                        >
                          {dateFormat(article?.published)}
                        </Body>
                        <Body
                          preset={
                            width >= 1280 ? "b1" : width >= 768 ? "b2" : "b3"
                          }
                        >
                          {/* Handle title yang terlalu panjang */}
                          <ReactMarkdown>
                            {article?.title.length >= 40
                              ? article?.title.slice(0, 40) + " ..."
                              : article?.title}
                          </ReactMarkdown>
                        </Body>
                        {width >= 1280 ? (
                          <Body preset="p2" className="text-[14px]">
                            {article?.body.slice(0, 480) + " ..."}
                          </Body>
                        ) : width >= 768 ? (
                          <Body preset="p3">
                            {article?.body.slice(0, 100) + " ..."}
                          </Body>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </button>
                </Link>
                <ShareLinkToClipboard
                  className={
                    width >= 768
                      ? "absolute bottom-3 right-20 desktop:bottom-[21px] desktop:right-10"
                      : "absolute bottom-3 right-3"
                  }
                  link={"article/" + article.slug}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
