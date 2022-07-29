import SmallBlueLine from "@images/small-blue-line.svg";
import { Body, Button, InputField } from "@components";
import { SearchIcon } from "@heroicons/react/outline";
import { ArtikelArtikelLainnya } from "@components";


type ArtikelSemuaArtikelProps = {
  className?: string;
  articles?: any;
  topics?: any;
  children?: React.ReactNode;
};

export const ArtikelSemuaArtikel = ({
  children,
  className,
  articles,
  topics,
}: ArtikelSemuaArtikelProps) => {
  return (
    <div className="flex justify-center bg-powder-light mobile:h-[720px]">
      <div className="flex flex-col w-full">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Semua Artikel</Body>
        </div>
        <InputField
          type="text"
          placeholder="Cari Artikel"
          leftIcon={<SearchIcon />}
        ></InputField>
        {/* BAGIAN TOPIC */}
        <div className="pl-6 py-3">
          <Body preset="p3">Cari artikel berdasarkan topik</Body>
          {/* KUMPULAN TOPIC */}
          <div className="grid grid-cols-4 gap-1">
            {/* BUTTON MENUJU TOPIC TERTENTU */}
            <div>
              <button>
                {topics?.map((topic: any) => (
                  <div
                    className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-1"
                    key={topic.id}
                  >
                    {topic.name}
                  </div>
                ))}
              </button>
            </div>
          </div>
        </div>
        {/* KUMPULAN ARTIKEL PER 5 */}
        <ArtikelArtikelLainnya />
        <div className="flex justify-center pt-6">
          <Button preset="secondaryLight" className="w-[160px]">
            Artikel Lainnya
          </Button>
        </div>
      </div>
    </div>
  );
};
