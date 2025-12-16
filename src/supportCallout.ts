export const SUPPORT_CALLOUT = {
  cta: "觉得不错，请 jwy-hm 喝冰可乐 🥤",
  link: "https://miaoyan.app/cats.html?name=潮流周刊",//修改
};

export const renderSupportCalloutForRSS = () => {
  const { cta, link } = SUPPORT_CALLOUT;
  return `
    <hr style="border:none;border-top:0.5px solid rgba(0,0,0,0.08);margin:26px 0 14px;" />
    <p style="text-align:left;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <a
        href="${link}"
        style="
          display:inline-block;
          padding:6px 18px;
          border-radius:999px;
          background:#222;
          color:#fff;
          font-size:13px;
          text-decoration:none;
        "
        target="_blank"
        rel="noreferrer"
      >${cta}</a>
    </p>
  `.trim();
};
