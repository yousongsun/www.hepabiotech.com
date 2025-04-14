import Link from 'next/link';

interface TextImageProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

export const TextImageRound: React.FC<TextImageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">{description}</p>

          <div className="mt-4 md:mt-8">
            <Link
              href={buttonLink}
              className="inline-block rounded-sm bg-[#02548d] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#02548d]/80"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={imageUrl}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export const TextImageSquare: React.FC<TextImageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {title}
              </h2>

              <p className="mt-4 text-gray-700">{description}</p>
            </div>
          </div>

          <div>
            <img src={imageUrl} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TextImageUpDown: React.FC<TextImageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-700">{description}</p>
          </div>
          <div>
            <img src={imageUrl} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
