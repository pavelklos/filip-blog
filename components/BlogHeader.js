// _rfc
import { urlFor } from "lib/api";

export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
}) {
  const coverImageTemp =
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1689&q=60";

  return (
    <div className='blog-detail-header'>
      <p className='lead mb-0'>
        <img
          src={author?.avatar || "https://via.placeholder.com/150"}
          className='rounded-circle mr-3'
          height='50px'
          width='50px'
          alt='avatar'
        />
        {author?.name}
        {", "} {new Date(date).toLocaleString("cs-CZ", {})}
      </p>
      <h1 className='font-weight-bold blog-detail-header-title mb-0'>
        {title}
      </h1>
      <h2 className='blog-detail-header-subtitle mb-3'>{subtitle}</h2>
      {/* Check if contains cover image */}
      <h5 className='warning'>Cover Image (16 : 9) @sanity/image-url</h5>
      <h6 className='warning'>width(960).height(540)</h6>
      <img
        className='img-fluid rounded'
        src={
          coverImage
            ? urlFor(coverImage).height(400).url()
            : // urlFor(coverImage).width(960).height(540).url() // 16 : 9
              coverImageTemp
        }
        alt='TODO: provide alt'
      />
    </div>
  );
}
