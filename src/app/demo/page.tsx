import List from '@/components/demo/List';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';

const Page = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={['demo']}
        queryFn={() => fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())}>
        <List />
      </PrefetchHydration>
    </div>
  );
};

export default Page;
