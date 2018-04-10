const withTruncateParagraph = Component => {
  const WithTruncateParagraph = ({ textLength = 10, children, ...props }) => {
    const text =
      textLength === -1 ? children : `${children.slice(0, textLength)}...`;
    return <Component {...props}>{text}</Component>;
  };

  WithTruncateParagraph.displayName =
    "WithTruncateParagraph(" +
    (Component.displayName || Component.name || "Component") +
    ")";

  return WithTruncateParagraph;
};
