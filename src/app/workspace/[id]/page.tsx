import ChatSection from './_components/chat-section';
import CodeSection from './_components/code-section';

const WorkspaceDetailPage = () => {
  return (
    <div className='flex h-full gap-5 py-4'>
      <ChatSection />
      <CodeSection />
    </div>
  );
};

export default WorkspaceDetailPage;
