import React from 'react';
import { render, screen, waitFor, debug } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Chatbot from '../../src/component/ChatBot/ChatBot';

jest.mock('../../../src/component/ChatBot/ChatBot.css', () => ({}));
jest.mock('../../../src/component/ChatBot/initialContent.css', () => ({}));
jest.mock('../../../src/component/ProgressBar/Loadinglights.css', () => ({}));

describe('Chatbot Component', () => {
    test('clicking on the chatbot link navigates to the chatbot page', async () => {
      render(
        <BrowserRouter> {/* Wrap Chatbot component with BrowserRouter */}
          <Chatbot />
        </BrowserRouter>
      );
  
      // Wait for the chatbot link to become visible
      await waitFor(() => {
        const chatbotLink = screen.getByText(/Let's start chatting/i);
        expect(chatbotLink).toBeInTheDocument();
      });

      // Debug the rendered DOM
      debug();
  
      // Click on the chatbot link
      const chatbotLink = screen.getByText(/Let's start chatting/i);
      userEvent.click(chatbotLink);
  
      // Check if navigation to chatbot page is successful
      expect(window.location.href).toContain('/chatbot');
    });
});