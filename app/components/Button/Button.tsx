interface Props {
  label: string;
  parentMethod: () => void;
}

/**
 *
 * @param param0
 * @returns
 */
export function Button({ label, parentMethod }: Props) {
  return (
    <button
      type="button"
      className="
				flex flex-row items-center px-5 py-1.5 gap-2.5
				border rounded-md
				transition-colors duration-150 ease-in
				hover:bg-black hover:text-white hover:cursor-pointer
				active:bg-transparent active:shadow-[inset_0.2rem_0.2rem_0.4rem_0_rgb(0,0,0,0.2)] active:text-black active:border-transparent
				active:[&>*]:translate-y-0.5
			"
      onClick={parentMethod}
    >
      <i className="fa-solid fa-bell" />
      <p className="text-1">{label}</p>
    </button>
  );
}
