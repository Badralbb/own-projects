'use client';
import { useEffect, useState } from 'react';

const Page = () => {
  const [html, setHtml] = useState<string>();

  const getHtml = async () => {
    const res = await fetch('https://www.accuweather.com/en/mn/ulan-bator/246421/weather-forecast/246421');

    const htmlText = await res.text();

    const parser = new DOMParser();

    const dom = parser.parseFromString(htmlText, 'text/html');

    const element = dom?.querySelector('.page-column-1')?.innerHTML;

    setHtml(element);
  };

  useEffect(() => {
    getHtml();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html! }} />;
};

export default Page;
