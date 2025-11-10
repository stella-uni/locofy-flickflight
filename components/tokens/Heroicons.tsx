import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

// Heroicons 목록 (주요 아이콘들)
const iconList = [
  { name: 'AdjustmentsHorizontalIcon', label: 'adjustments' },
  { name: 'ArchiveBoxIcon', label: 'archive' },
  { name: 'ArrowDownIcon', label: 'arrow-down' },
  { name: 'BellIcon', label: 'bell' },
  { name: 'BookmarkIcon', label: 'bookmark' },
  { name: 'CalendarIcon', label: 'calendar' },
  { name: 'CameraIcon', label: 'camera' },
  { name: 'ChartBarIcon', label: 'chart-bar' },
  { name: 'CheckIcon', label: 'check' },
  { name: 'ClipboardIcon', label: 'clipboard' },
  { name: 'CloudIcon', label: 'cloud' },
  { name: 'CodeBracketIcon', label: 'code' },
  { name: 'Cog6ToothIcon', label: 'cog' },
  { name: 'RectangleStackIcon', label: 'collection' },
  { name: 'SwatchIcon', label: 'color-swatch' },
  { name: 'CreditCardIcon', label: 'credit-card' },
  { name: 'CubeIcon', label: 'cube' },
  { name: 'CurrencyDollarIcon', label: 'currency-dollar' },
  { name: 'CircleStackIcon', label: 'database' },
  { name: 'ComputerDesktopIcon', label: 'desktop-computer' },
  { name: 'DocumentIcon', label: 'document' },
  { name: 'ArrowDownTrayIcon', label: 'download' },
  { name: 'Square2StackIcon', label: 'duplicate' },
  { name: 'FaceSmileIcon', label: 'emoji-happy' },
  { name: 'ExclamationTriangleIcon', label: 'exclamation' },
  { name: 'ArrowTopRightOnSquareIcon', label: 'external-link' },
  { name: 'EyeIcon', label: 'eye' },
  { name: 'ForwardIcon', label: 'fast-forward' },
  { name: 'FunnelIcon', label: 'filter' },
  { name: 'FingerPrintIcon', label: 'finger-print' },
  { name: 'FireIcon', label: 'fire' },
  { name: 'FlagIcon', label: 'flag' },
  { name: 'FolderIcon', label: 'folder' },
  { name: 'GiftIcon', label: 'gift' },
  { name: 'GlobeAltIcon', label: 'globe' },
  { name: 'HandRaisedIcon', label: 'hand' },
  { name: 'HashtagIcon', label: 'hashtag' },
  { name: 'HeartIcon', label: 'heart' },
  { name: 'HomeIcon', label: 'home' },
  { name: 'InboxIcon', label: 'inbox' },
  { name: 'InformationCircleIcon', label: 'information-circle' },
  { name: 'KeyIcon', label: 'key' },
  { name: 'BuildingLibraryIcon', label: 'library' },
  { name: 'LightBulbIcon', label: 'light-bulb' },
  { name: 'BoltIcon', label: 'lightning-bolt' },
  { name: 'LinkIcon', label: 'link' },
  { name: 'MapPinIcon', label: 'location-marker' },
  { name: 'LockClosedIcon', label: 'lock-closed' },
  { name: 'EnvelopeIcon', label: 'mail' },
  { name: 'MapIcon', label: 'map' },
  { name: 'Bars3Icon', label: 'menu' },
  { name: 'MicrophoneIcon', label: 'microphone' },
  { name: 'MoonIcon', label: 'moon' },
  { name: 'NewspaperIcon', label: 'newspaper' },
  { name: 'BuildingOfficeIcon', label: 'office-building' },
  { name: 'PaperClipIcon', label: 'paper-clip' },
  { name: 'PencilIcon', label: 'pencil' },
  { name: 'PhoneIcon', label: 'phone' },
  { name: 'PhotoIcon', label: 'photograph' },
  { name: 'PlayIcon', label: 'play' },
  { name: 'PlusIcon', label: 'plus' },
  { name: 'PrinterIcon', label: 'printer' },
  { name: 'PuzzlePieceIcon', label: 'puzzle' },
  { name: 'QrCodeIcon', label: 'qrcode' },
  { name: 'QuestionMarkCircleIcon', label: 'question-mark-circle' },
  { name: 'ReceiptPercentIcon', label: 'receipt' },
  { name: 'ArrowPathIcon', label: 'refresh' },
  { name: 'ArrowUturnLeftIcon', label: 'reply' },
  { name: 'BackwardIcon', label: 'rewind' },
  { name: 'RssIcon', label: 'rss' },
  { name: 'ScaleIcon', label: 'scale' },
  { name: 'ScissorsIcon', label: 'scissors' },
  { name: 'MagnifyingGlassIcon', label: 'search' },
  { name: 'CursorArrowRaysIcon', label: 'selector' },
  { name: 'ShareIcon', label: 'share' },
  { name: 'ShieldCheckIcon', label: 'shield-check' },
  { name: 'ShoppingBagIcon', label: 'shopping-bag' },
  { name: 'SparklesIcon', label: 'sparkles' },
  { name: 'SpeakerWaveIcon', label: 'speaker-phone' },
  { name: 'StarIcon', label: 'star' },
  { name: 'SunIcon', label: 'sun' },
  { name: 'LifebuoyIcon', label: 'support' },
  { name: 'ArrowsRightLeftIcon', label: 'switch-horizontal' },
  { name: 'TagIcon', label: 'tag' },
  { name: 'CommandLineIcon', label: 'terminal' },
  { name: 'HandThumbDownIcon', label: 'thumb-down' },
  { name: 'HandThumbUpIcon', label: 'thumb-up' },
  { name: 'TicketIcon', label: 'ticket' },
  { name: 'LanguageIcon', label: 'translate' },
  { name: 'TrashIcon', label: 'trash' },
  { name: 'ArrowTrendingDownIcon', label: 'trending-down' },
  { name: 'ArrowTrendingUpIcon', label: 'trending-up' },
  { name: 'TruckIcon', label: 'truck' },
  { name: 'ArrowUpTrayIcon', label: 'upload' },
  { name: 'UserIcon', label: 'user' },
  { name: 'UsersIcon', label: 'users' },
  { name: 'VariableIcon', label: 'variable' },
  { name: 'VideoCameraIcon', label: 'video-camera' },
  { name: 'Squares2X2Icon', label: 'view-grid' },
  { name: 'SpeakerXMarkIcon', label: 'volume-off' },
  { name: 'SpeakerWaveIcon', label: 'volume-up' },
  { name: 'SignalIcon', label: 'wifi' },
  { name: 'XMarkIcon', label: 'x' },
  { name: 'MagnifyingGlassPlusIcon', label: 'zoom-in' },
  { name: 'MagnifyingGlassMinusIcon', label: 'zoom-out' },
];

const Heroicons = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Heroicons</h2>
        <div className="text-sm text-content-content-secondary">
          {iconList.length} hand-crafted icons
        </div>
      </div>
      
      <div className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
        <div className="grid grid-cols-3 gap-4">
          {iconList.map(({ name, label }) => {
            const IconComponent = (HeroIcons as any)[name] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            
            if (!IconComponent) {
              return null;
            }
            
            return (
              <div
                key={name}
                className="flex items-center gap-3 p-3 rounded border border-border-primary hover:bg-background-background-secondary transition-colors cursor-pointer group"
              >
                <div className="flex-shrink-0 w-6 h-6 text-content-content-primary group-hover:text-content-content-primary transition-colors">
                  <IconComponent className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-content-content-primary truncate">
                    {label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Heroicons;

