/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDocsVersion} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/DocVersionBadge';

export default function DocTopicBadge({
  className,
}: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (!versionMetadata) {
    return null;
  }
  var topicLabel = versionMetadata.pluginId;
  // workaround for to show a better name than "default"
  if (versionMetadata.pluginId == 'default') {
    topicLabel = 'ApiGear Core';
  }
  return (
    <span
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBadge,
        'badge badge--secondary',
      )}>
      Topic: {topicLabel}
    </span>
  );
}
