import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const renderHtmlMethod = input => {
  return documentToHtmlString(input, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
      }
    }
  });
};

const renderImage = ({ src = "", fit = "", w = 100, h = 100 } = {}) =>
  `${src.replace(/downloads./g, "images.")}?fit=${fit}&w=${w}&h=${h}`;

const getCoverImage = node => {
  return node.heroImage
    ? node.heroImage.file
    : node.media.length > 0
    ? node.media[0].file
    : null;
};

export { renderHtmlMethod, renderImage, getCoverImage };
