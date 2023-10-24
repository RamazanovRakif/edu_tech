import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.scss";

type LanguageOption = {
  id: number;
  name: string;
  code: string;
};

const Language: React.FC = () => {
  const options: LanguageOption[] = useMemo(
    () => [
      {
        id: 0,
        name: "Az",
        code: "az",
      },
      {
        id: 1,
        name: "En",
        code: "en",
      },
      {
        id: 2,
        name: "Ru",
        code: "ru",
      },
    ],
    []
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectedOption: LanguageOption | undefined = useMemo(
    () => options[selectedId],
    [options, selectedId]
  );
  const filteredOptions: LanguageOption[] = useMemo(
    () => options.filter((item) => item.id !== selectedId),
    [options, selectedId]
  );

  const onClickHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const onSelectHandler = useCallback(
    (value: string, id: number) => {
      setSelectedId(id);
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (!value) {
        current.delete("");
      } else {
        current.set("", value);
      }

      const search = current.toString();
      const query = search && `?${search}`;
      router.push(`${pathname}${query}`);
    },
    [pathname, router, searchParams]
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={modalRef}>
      <ul>
        <li className={styles.default_item} onClick={onClickHandler}>
          {selectedOption?.name}
          <span className={styles.down_icon}>
            <FiChevronDown />
          </span>
          {!!toggle && (
            <ul className={styles.dropdown_items}>
              {!!filteredOptions.length &&
                filteredOptions.map((item) => (
                  <li
                    key={item.id}
                    className={styles.dropdown_item}
                    onClick={() => onSelectHandler(item.code, item.id)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Language;
