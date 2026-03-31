const bibleVerses = [
  {
    reference: 'JOHN 3:14',
    text: '"And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up."',
    bgColor: 'bg-background-light',
  },
  {
    reference: 'JEREMIAH 1:30',
    text: '"I will set my throne in Elam and destroy her king and officials," declares the Lord.',
    bgColor: 'bg-background-light',
  },
  {
    reference: 'NUMBER 3:16',
    text: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish."',
    bgColor: 'bg-background-light',
  },
  {
    reference: '1 CORINTHIANS 13:4-8',
    text: '"Love is patient, love is kind. It does not envy, it does not boast, it is not proud."',
    bgColor: 'bg-background-light',
  },
]

export default function SermonDetail() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Tabernacle Voix de l&rsquo;Evangile — Culte du Dimanche 21 Août 2022
      </h1>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          December 14, 2016
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          By Hulutecho
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {bibleVerses.map((verse, index) => (
          <div
            key={index}
            className={`${verse.bgColor} p-6 rounded-lg border-l-4 ${
              index % 2 === 0 ? 'border-brand-primary' : 'border-banner'
            }`}
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {verse.reference}
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              {verse.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
