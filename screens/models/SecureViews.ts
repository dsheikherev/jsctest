import { ListItemWithAction } from '../../Types';
import Bugsee from 'react-native-bugsee';

export const secureRectItems: ListItemWithAction<any>[] = [
  {
    key: '-0',
    title: 'Secure rectangles',
  },
  {
    key: '1',
    title: 'Add secure rectangle',
    action: () => Bugsee.addSecureRect(270, 270, 270, 270),
  },
  {
    key: '2',
    title: 'Delete secure rectangle',
    action: () => Bugsee.removeSecureRect(270, 270, 270, 270),
  },
  {
    key: '3',
    title: 'Get all secure rectangles',
    action: async () => {
      const allRectangles = await Bugsee.getAllSecureRects();
      allRectangles?.forEach((r) => {
        console.log(`Received Bugsee secure rectangle: <${r.x}, ${r.y}, ${r.width}, ${r.height}>`);
      });
    },
  },
  {
    key: '4',
    title: 'Delete all secure rectangles',
    action: () => Bugsee.removeAllSecureRects(),
  },
];
