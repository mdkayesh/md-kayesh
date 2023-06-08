// click the body and close the dropdown

const clickToClose = (
  show,
  setShow,
  containerRef,
  containerClass,
  btnClass
) => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(containerClass) === containerRef.current) {
      if (e.target.closest(btnClass)) {
        setShow(!show);
      } else {
        setShow(true);
      }
    } else {
      setShow(false);
    }
  });
};

export { clickToClose };
