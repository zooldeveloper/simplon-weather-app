import styles from "./Search.module.css";
// Ths component is not currently used, but it can be easily integrated in the future.
export const Search = ({
  placeHolder,
  value,
  onFocus,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeHolder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
