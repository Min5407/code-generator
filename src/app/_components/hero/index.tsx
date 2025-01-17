'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useMutation } from 'convex/react';
import { useState } from 'react';
import { api } from '../../../../convex/_generated/api';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [promptTxt, setPromptTxt] = useState('');
  const { push } = useRouter();

  const createWorkspace = useMutation(api.workspace.createWorkspace);

  const handlePromptTxtClick = (text: string) => {
    setPromptTxt(text);
  };

  const handleGenerateWorkspace = async () => {
    const workspaceId = await createWorkspace({ messages: [promptTxt] });

    push(`workspace/${workspaceId}`);
  };

  return (
    <div className='flex h-full flex-col items-center justify-center '>
      <h2 className='text-4xl font-bold mb-2'>What Do You Want to Generate?</h2>
      <p className='text-gray-400 text-xl mb-6'>
        Enter a prompt in the box below
      </p>
      <Textarea
        className='w-[600px] h-32 mb-6 resize-none border-gray-400'
        placeholder='Enter a prompt...'
        value={promptTxt}
        onChange={(e) => setPromptTxt(e.target.value)}
      />

      <Button
        variant='destructive'
        disabled={!promptTxt}
        onClick={handleGenerateWorkspace}
      >
        Generate <span className='ml-1'>🚀</span>
      </Button>

      <ul className='mt-10 flex gap-4 max-w-[500px] flex-wrap justify-center'>
        <li className='font-bold text-gray-400 border rounded-full text-sm p-2 hover:text-gray-300 hover:border-gray-300 transition-all'>
          <button onClick={() => handlePromptTxtClick('Create Todo App')}>
            Create Todo App
          </button>
        </li>
        <li className='font-bold text-gray-400 border rounded-full text-sm p-2 hover:text-gray-300 hover:border-gray-300 transition-all'>
          <button onClick={() => handlePromptTxtClick('Create Todo App')}>
            Create Todo App
          </button>
        </li>
        <li className='font-bold text-gray-400 border rounded-full text-sm p-2 hover:text-gray-300 hover:border-gray-300 transition-all'>
          <button onClick={() => handlePromptTxtClick('Create Todo App')}>
            Create Todo App
          </button>
        </li>
        <li className='font-bold text-gray-400 border rounded-full text-sm p-2 hover:text-gray-300 hover:border-gray-300 transition-all'>
          <button onClick={() => handlePromptTxtClick('Create Todo App')}>
            Create Todo App
          </button>
        </li>
        <li className='font-bold text-gray-400 border rounded-full text-sm p-2 hover:text-gray-300 hover:border-gray-300 transition-all'>
          <button onClick={() => handlePromptTxtClick('Create Todo App')}>
            Create Todo App
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
