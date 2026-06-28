/**
 * BookmarkCard 组件测试
 */
import { render, screen } from '@testing-library/react';
import { BookmarkCard } from './index';

describe('BookmarkCard', () => {
  const defaultProps = {
    title: 'Example Bookmark',
    url: 'https://example.com',
    description: 'An example bookmark for testing',
    tags: ['frontend', 'react'],
  };

  it('渲染标题和 URL', () => {
    render(<BookmarkCard {...defaultProps} />);

    expect(screen.getByText('Example Bookmark')).toBeInTheDocument();
    expect(screen.getByText('https://example.com')).toBeInTheDocument();
  });

  it('渲染描述文本', () => {
    render(<BookmarkCard {...defaultProps} />);

    expect(
      screen.getByText('An example bookmark for testing'),
    ).toBeInTheDocument();
  });

  it('渲染所有标签', () => {
    render(<BookmarkCard {...defaultProps} />);

    expect(screen.getByText('frontend')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
  });

  it('无描述时不渲染描述段落', () => {
    render(
      <BookmarkCard title="No Desc" url="https://test.com" />,
    );

    expect(screen.getByText('No Desc')).toBeInTheDocument();
    // 不应该有 description 文本段落
    expect(
      screen.queryByText('An example bookmark for testing'),
    ).not.toBeInTheDocument();
  });

  it('无标签时不渲染标签区域', () => {
    render(
      <BookmarkCard title="No Tags" url="https://test.com" />,
    );

    expect(screen.getByText('No Tags')).toBeInTheDocument();
    // 标签元素不应该存在
    expect(screen.queryByText('frontend')).not.toBeInTheDocument();
  });

  it('标题链接指向正确的 URL', () => {
    render(<BookmarkCard {...defaultProps} />);

    const link = screen.getByRole('link', { name: 'Example Bookmark' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('支持额外的 className', () => {
    const { container } = render(
      <BookmarkCard {...defaultProps} className="custom-class" />,
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });
});
