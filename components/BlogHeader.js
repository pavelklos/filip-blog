// _rfc

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
      <img
        className='img-fluid rounded'
        src={coverImage || coverImageTemp}
        alt='TODO: provide alt'
      />
    </div>
  );
}
