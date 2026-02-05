
// Unit tests for: AdvanceContainer







import AdvanceContainer from '../AdvanceContainer';

import { fireEvent, render, screen } from '@testing-library/react';
describe('AdvanceContainer() AdvanceContainer method', () => {
  // Happy Path Tests
  describe('Happy Path', () => {
    test('should render all buttons and no toast initially', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Check if all buttons are rendered
      expect(screen.getByText('Full Load')).toBeInTheDocument();
      expect(screen.getByText('Incremental Load')).toBeInTheDocument();
      expect(screen.getByText('Chunck Load')).toBeInTheDocument();

      // Check that no toast is visible initially
      expect(screen.queryByText('Full Load')).not.toBeVisible();
      expect(screen.queryByText('Incremental Load')).not.toBeVisible();
      expect(screen.queryByText('Chunk Load')).not.toBeVisible();
    });

    test('should display Full Load toast when Full Load button is clicked', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Click the Full Load button
      fireEvent.click(screen.getByText('Full Load'));

      // Check if the Full Load toast is visible
      expect(screen.getByText('Full Load')).toBeVisible();
    });

    test('should display Incremental Load toast when Incremental Load button is clicked', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Click the Incremental Load button
      fireEvent.click(screen.getByText('Incremental Load'));

      // Check if the Incremental Load toast is visible
      expect(screen.getByText('Incremental Load')).toBeVisible();
    });

    test('should display Chunk Load toast when Chunck Load button is clicked', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Click the Chunck Load button
      fireEvent.click(screen.getByText('Chunck Load'));

      // Check if the Chunk Load toast is visible
      expect(screen.getByText('Chunk Load')).toBeVisible();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    test('should only display one toast at a time', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Click the Full Load button
      fireEvent.click(screen.getByText('Full Load'));
      expect(screen.getByText('Full Load')).toBeVisible();
      expect(screen.queryByText('Incremental Load')).not.toBeVisible();
      expect(screen.queryByText('Chunk Load')).not.toBeVisible();

      // Click the Incremental Load button
      fireEvent.click(screen.getByText('Incremental Load'));
      expect(screen.queryByText('Full Load')).not.toBeVisible();
      expect(screen.getByText('Incremental Load')).toBeVisible();
      expect(screen.queryByText('Chunk Load')).not.toBeVisible();

      // Click the Chunck Load button
      fireEvent.click(screen.getByText('Chunck Load'));
      expect(screen.queryByText('Full Load')).not.toBeVisible();
      expect(screen.queryByText('Incremental Load')).not.toBeVisible();
      expect(screen.getByText('Chunk Load')).toBeVisible();
    });

    test('should close the toast when the close button is clicked', () => {
      // Render the component
      render(<AdvanceContainer />);

      // Click the Full Load button
      fireEvent.click(screen.getByText('Full Load'));
      expect(screen.getByText('Full Load')).toBeVisible();

      // Close the Full Load toast
      fireEvent.click(screen.getByText('Full Load').closest('.toastbody').querySelector('button'));
      expect(screen.queryByText('Full Load')).not.toBeVisible();
    });
  });
});

// End of unit tests for: AdvanceContainer
