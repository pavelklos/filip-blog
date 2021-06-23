export default function exitPreview(_, res) {
  // 301 (Moved Permanently)
  // 302 (Found)
  // 307 (Temporary Redirect)
  // 308 (Permanent Redirect)
  res.clearPreviewData();
  // res.writeHead(307, { Location: "/" });
  res.writeHead(302, { Location: "/" });
  res.end();
}
