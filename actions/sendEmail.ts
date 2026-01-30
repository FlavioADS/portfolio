"use server";

export const getMailToLink = (subject?: string, body?: string) => {
  const email = "flaviodearaujodosanjos1945@gmail.com";
  const params = new URLSearchParams();

  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  return `mailto:${email}?${params.toString()}`;
};
