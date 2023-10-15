export default function ThreeWords() {

    const stats = [
        { id: 1, name: 'අම්මා', value: 'අம்මා' },
        { id: 2, name: 'අය්යා', value: 'අய்යා' },
        { id: 3, name: 'අක්කා', value: 'අக்කා' },
        { id: 4, name: 'මල්ලි', value: 'මல்ලි' },
        { id: 5, name: 'තාත්තා', value: 'තාத்තා' },
        { id: 6, name: 'කඩය', value: 'කடாය' },
        { id: 7, name: 'නැන්දා', value: 'නැன்දා' },
        { id: 8, name: 'බෝලය', value: 'බෝலය' },
        { id: 9, name: 'වතුර', value: 'වதுර' },
      ]

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
