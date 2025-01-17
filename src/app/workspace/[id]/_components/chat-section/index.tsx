'use client';

import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import { api } from '../../../../../../convex/_generated/api';
import { Input } from '@/components/ui/input';

const ChatSection = () => {
  const { id } = useParams();

  // const result = useQuery(api.workspace.getWorkspaceMessages, {
  //   workspaceId: String(id || ''),
  // });

  // console.log('##', result);

  return (
    <section className='flex-[0.3] flex flex-col  h-full rounded'>
      <h2 className='text-4xl text-center my-4 bg-neutral-800 rounded py-2'>
        CHAT 🧙
      </h2>
      <Input
        placeholder='Send a message..'
        autoFocus
        className='h-14 placeholder:text-gray-400'
      />

      <ul className='bg-neutral-800 rounded p-4 mt-4 overflow-auto h-[74vh]'>
        <li>Messages</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          earum assumenda magni suscipit amet nam commodi tempore porro harum
          sit ad, deserunt magnam vel fugit eius eveniet dolorum voluptatem
          consequatur!
        </li>
      </ul>
    </section>
  );
};

export default ChatSection;
